import { memo } from 'react';

const Header = memo(() => {
  return (
    <header className='bg-primary w-full' data-cy='header-background'>
      <div className='container'>
        <h1
          data-cy='header-title'
          className='py-8 text-white font-bold text-3xl'
        >
          TO DO LIST APP
        </h1>
      </div>
    </header>
  );
});

function Mainlayout(props) {
  const { children } = props;
  return (
    <>
      <Header />
      <main className='container'>{children}</main>
    </>
  );
}

export { Mainlayout };
