// No matter how deep in the files we are, we have the `@` alias
// For easy access to our generated hooks
// I know it's redundant here, but in a large project this could keep things tidier
import { BooksList } from './components/BooksList.js';
import { LoggedInUser } from './components/LoggedInUser.js';
import { useBootstrapApp } from './store/appStore.js';

export function App(): JSX.Element {
  useBootstrapApp();

  return (
    <>
      <h1 className="text-3xl">Books</h1>
      <button
        className="border bg-slate-200 p-2"
        onClick={() => {
          fetch('http://localhost:3000/login', { credentials: 'include' });
        }}
      >
        Login
      </button>
      <button
        className="border bg-slate-200 p-2"
        onClick={() => {
          fetch('http://localhost:3000/logout', { credentials: 'include' });
        }}
      >
        Logout
      </button>
      <hr className="my-4" />
      <LoggedInUser />
      <hr className="my-4" />
      <BooksList />
    </>
  );
}
