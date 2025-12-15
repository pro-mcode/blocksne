import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="flex min-h-screen home-wrapper border border-red-600">
      <Header />
      <div className="container mx-auto">
        <Button>Button</Button>
      </div>
    </div>
  );
};

export default Page;
