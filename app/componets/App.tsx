import React from 'react';

// Define the type for the component's props
type RootLayoutProps = {
  children: React.ReactNode;
};

// Apply the type to your functional component
export default function App({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* Your other scripts here */}
      </body>
    </html>
  );
}