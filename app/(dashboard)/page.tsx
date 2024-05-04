import React from "react";

function page({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full relative flex-col">
      <div className="w-full">{children}</div>
    </div>
  );
}

export default page;
