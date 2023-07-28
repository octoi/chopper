export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='w-full md:w-[650px] p-5'>{children}</div>
    </div>
  );
}
