import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper functions for Supabase operations

export const getTasks = async () => {
  try {
    const { data, error } = await supabase
      .from('tasks')
      .select('*')
    if (error) {
      if (error.code === '42P01') {
        console.warn('Tasks table does not exist yet. Returning empty array.')
        return []
      }
      throw error
    }
    return data
  } catch (error) {
    console.error('Error fetching tasks:', error)
    return []
  }
}

export const createTask = async (task) => {
  try {
    const { data, error } = await supabase
      .from('tasks')
      .insert(task)
    if (error) throw error
    return data
  } catch (error) {
    console.error('Error creating task:', error)
    throw error
  }
}

export const updateTask = async (id, updates) => {
  try {
    const { data, error } = await supabase
      .from('tasks')
      .update(updates)
      .match({ id })
    if (error) throw error
    return data
  } catch (error) {
    console.error('Error updating task:', error)
    throw error
  }
}

export const getProfile = async (userId) => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()
    if (error) {
      if (error.code === '42P01') {
        console.warn('Profiles table does not exist yet. Returning null.')
        return null
      }
      throw error
    }
    return data
  } catch (error) {
    console.error('Error fetching profile:', error)
    return null
  }
}

export const updateProfile = async (userId, updates) => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .upsert({ id: userId, ...updates })
    if (error) throw error
    return data
  } catch (error) {
    console.error('Error updating profile:', error)
    throw error
  }
}

export const getNotifications = async (userId) => {
  try {
    const { data, error } = await supabase
      .from('notifications')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
    if (error) {
      if (error.code === '42P01') {
        console.warn('Notifications table does not exist yet. Returning empty array.')
        return []
      }
      throw error
    }
    return data
  } catch (error) {
    console.error('Error fetching notifications:', error)
    return []
  }
}