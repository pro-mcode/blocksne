import Header from "@/components/Header";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col text-gray-400">
      <Header />
      <main className="mx-auto">{children}</main>
    </div>
  );
};

export default layout;
