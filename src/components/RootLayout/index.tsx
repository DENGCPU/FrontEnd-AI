"use client";
import { CopilotProvider } from "@copilotkit/react-core";
import "@copilotkit/react-textarea/styles.css"; // also import this if you want to use the CopilotTextarea component
import "@copilotkit/react-ui/styles.css"; // also import this if you want to use the chatbot componentxw

export default function RootLayout({children}) {
  return (
    <CopilotProvider chatApiEndpoint="/path_to_copilotkit_endpoint/see_below">
      {children}
    </CopilotProvider>
  );
}
