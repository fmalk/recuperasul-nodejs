import { createClient, SupabaseClient, SupportedStorage } from '@supabase/supabase-js';
import { Injectable } from '@nestjs/common';
import * as NodeCache from 'node-cache';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class SupabaseService {
  private _supabase: SupabaseClient<any, string, any>;
  private _storage: SupportedStorage;
  private _cache:NodeCache = new NodeCache();

  constructor(private _config: ConfigService) {
    this.buildStorage();
    this.buildSupabase();
  }

  buildStorage() {
    this._storage = {
      getItem: (key) => this._cache.get(key),
      setItem: (key, value) => { this._cache.set(key, value) },
      removeItem: (key) => { this._cache.del(key) },
    }
  }

  buildSupabase() {
    this._supabase = createClient(this._config.get<string>('SUPABASE_URL'), this._config.get<string>('SUPABASE_KEY'), {
      auth: {
        detectSessionInUrl: false,
        flowType: 'pkce',
        storage: this._storage,
      },
    });
  }

  getSession() {
    return this._supabase.auth.getSession();
  }
}
