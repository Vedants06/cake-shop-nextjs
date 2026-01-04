
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Sign up | ShortyURL',
    description: 'InCoder Web',
}

const SignUpLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      {children}
    </>
  );
};

export default SignUpLayout;