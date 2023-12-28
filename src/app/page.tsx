import Main from "@/components/Main";
export default function Home({ searchParams }: { searchParams: any }) {
  return (
    <div>
      <Main searchParams={searchParams} />
    </div>
  );
}
