'use client';

import TodoApp from "../components/TodoApp";
import ProtectedRoute from "../components/Auth/ProtectedRoute";

import React from 'react'

const TodoAppPage = () => {
  return (
    <ProtectedRoute>
        <div>
            <TodoApp/>
        </div>
    </ProtectedRoute>
  )
}

export default TodoAppPage;