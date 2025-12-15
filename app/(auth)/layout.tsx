const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="auth-layout">
      <div className="auth-left-section scrollbar-hide-default">{children}</div>
    </main>
  );
};

export default layout;
