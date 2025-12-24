import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const initialTasks = [
  {
    id: 1,
    title: 'Landing Page hero block',
    description: 'Design and implement main hero section.',
    status: 'In Progress',
    tag: 'Design',
  },
  {
    id: 2,
    title: 'Login view form',
    description: 'Create login screen with validation.',
    status: 'To Do',
    tag: 'Enhancement',
  },
  {
    id: 3,
    title: 'Registration view form',
    description: 'Add registration form with email confirmation.',
    status: 'Done',
    tag: 'Enhancement',
  },
  {
    id: 4,
    title: 'Email verification gives 500',
    description: 'Fix API error on email verification.',
    status: 'Backlog',
    tag: 'Bug',
  },
];

const statuses = ['Backlog', 'To Do', 'In Progress', 'Done'];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('');
  const [nextId, setNextId] = useState(initialTasks.length + 1);

  const handleAddTask = (title, description, status, tag) => {
    if (!title.trim()) return;
    const newTask = {
      id: nextId,
      title,
      description,
      status,
      tag,
    };
    setNextId((id) => id + 1);
    setTasks((prev) => [...prev, newTask]);
  };

  const moveTask = (id, direction) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== id) return task;
        const currentIndex = statuses.indexOf(task.status);
        const newIndex = currentIndex + direction;
        if (newIndex < 0 || newIndex >= statuses.length) return task;
        return { ...task, status: statuses[newIndex] };
      })
    );
  };

  const filteredTasks = tasks.filter((task) =>
    filter.trim()
      ? task.title.toLowerCase().includes(filter.toLowerCase()) ||
        task.description.toLowerCase().includes(filter.toLowerCase())
      : true
  );

  return (
    <div className="min-h-screen flex flex-col">
      <GradientBackground />

      <header className="relative z-10 px-6 py-4 border-b border-slate-800 backdrop-blur-md bg-slate-950/60">
        <div className="max-w-6xl mx-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Kanban Board
            </h1>
            <p className="text-sm text-slate-400">
              Manage your tasks across Backlog, To Do, In Progress and Done.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search tasks..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/60"
            />
          </div>
        </div>
      </header>

      <main className="relative z-10 flex-1 px-4 py-6 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-6">
          <TaskForm onAddTask={handleAddTask} />

          <div className="grid gap-4 md:grid-cols-4">
            {statuses.map((status) => (
              <Column
                key={status}
                title={status}
                tasks={filteredTasks.filter((t) => t.status === status)}
                moveTask={moveTask}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function GradientBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-0 overflow-hidden"
    >
      <div className="absolute -top-40 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-indigo-500/30 blur-3xl" />
      <div className="absolute bottom-[-12rem] left-[-5rem] h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute bottom-[-10rem] right-[-4rem] h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
    </div>
  );
}

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Backlog');
  const [tag, setTag] = useState('Enhancement');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(title, description, status, tag);
    setTitle('');
    setDescription('');
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 backdrop-blur-md shadow-[0_18px_45px_rgba(15,23,42,0.75)]"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-end">
        <div className="flex-1">
          <label className="block text-xs font-medium text-slate-300 mb-1">
            Task title
          </label>
          <input
            className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/70"
            placeholder="Implement search bar..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex-1">
          <label className="block text-xs font-medium text-slate-300 mb-1">
            Description
          </label>
          <input
            className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/70"
            placeholder="Short detail about the task"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">
            Status
          </label>
          <select
            className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/70"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            {statuses.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">
            Tag
          </label>
          <select
            className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/70"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          >
            <option>Enhancement</option>
            <option>Bug</option>
            <option>DevOps</option>
            <option>Docs</option>
            <option>Design</option>
          </select>
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/40 transition hover:bg-indigo-400 hover:shadow-indigo-400/40 focus:outline-none focus:ring-2 focus:ring-indigo-400/80"
        >
          + Add Task
        </button>
      </div>
    </motion.form>
  );
}

function Column({ title, tasks, moveTask }) {
  return (
    <motion.section
      className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-3 backdrop-blur-md shadow-[0_14px_35px_rgba(15,23,42,0.7)]"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <header className="mb-2 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400/80 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
          <h2 className="text-sm font-semibold tracking-tight">{title}</h2>
        </div>
        <span className="rounded-full bg-slate-800/80 px-2 py-0.5 text-[11px] text-slate-300">
          {tasks.length}
        </span>
      </header>

      <div className="flex-1 space-y-2 overflow-hidden">
        <AnimatePresence>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              moveTask={moveTask}
            />
          ))}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

function TaskCard({ task, moveTask }) {
  const tagStyles = {
    Enhancement: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/50',
    Bug: 'bg-rose-500/10 text-rose-300 border-rose-500/50',
    DevOps: 'bg-amber-500/10 text-amber-300 border-amber-500/60',
    Docs: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/60',
    Design: 'bg-sky-500/10 text-sky-300 border-sky-500/60',
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.96 }}
      whileHover={{ y: -4, scale: 1.01, boxShadow: '0 18px 45px rgba(15,23,42,0.95)' }}
      transition={{ duration: 0.18 }}
      className="group rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900/90 to-slate-950/90 px-3 py-2.5 text-xs shadow-[0_12px_30px_rgba(15,23,42,0.85)] cursor-pointer relative overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
        initial={false}
        animate={{ background: 'radial-gradient(circle at top, rgba(129,140,248,0.25), transparent 55%)' }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10 flex items-start justify-between gap-2">
        <div className="space-y-1">
          <h3 className="text-[13px] font-semibold text-slate-50">
            {task.title}
          </h3>
          {task.description && (
            <p className="text-[11px] text-slate-400">
              {task.description}
            </p>
          )}
          <span
            className={
              'inline-flex mt-1 items-center rounded-full border px-2 py-0.5 text-[10px] font-medium ' +
              (tagStyles[task.tag] || 'bg-slate-800/50 text-slate-200 border-slate-700')
            }
          >
            {task.tag}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              moveTask(task.id, -1);
            }}
            className="flex h-6 w-6 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 text-[10px] text-slate-300 hover:border-slate-600 hover:bg-slate-800/90"
          >
            ←
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              moveTask(task.id, 1);
            }}
            className="flex h-6 w-6 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 text-[10px] text-slate-300 hover:border-slate-600 hover:bg-slate-800/90"
          >
            →
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default App;
