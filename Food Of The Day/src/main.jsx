import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://wobgpcmhoekeetgiebxb.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvYmdwY21ob2VrZWV0Z2llYnhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI0MDEyMzYsImV4cCI6MTk5Nzk3NzIzNn0.Bhvvs0ikBmxMpRNU0DKoER7HH4RDOpWwZHqzXmoFWUY");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <App />
    </SessionContextProvider>
  </React.StrictMode>
);
