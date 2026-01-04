import Login from '@/app/login/page'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div>
   < Login/>
   </div>
  );
};
