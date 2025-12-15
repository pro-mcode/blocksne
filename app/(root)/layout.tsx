const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col text-gray-400">
      <main className="min-w-screen mx-auto">{children}</main>
    </div>
  );
};

export default layout;
