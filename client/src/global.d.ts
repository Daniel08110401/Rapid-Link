interface GoogleAccounts {
    id: {
      initialize: (config: { client_id: string, callback: (response: any) => void }) => void;
      renderButton: (container: HTMLElement, options: { theme: string, size: string }) => void;
    };
}
  
declare global {
    interface Window {
        google: {
        accounts: GoogleAccounts
        };
    }
}
  
export {};
  