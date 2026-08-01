import React from "react";

export function PhotoshopIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#001E36" />
      <path d="M6 7.5H9.5C11 7.5 12 8.3 12 9.7C12 11.2 10.9 12 9.4 12H7.6V16.5H6V7.5ZM7.6 8.8V10.8H9.3C10.1 10.8 10.5 10.4 10.5 9.8C10.5 9.2 10.1 8.8 9.3 8.8H7.6Z" fill="#31A8FF" />
      <path d="M12.8 14.2C13.2 13.5 14 13.1 15.1 13.1C16.4 13.1 17.2 13.8 17.2 14.8C17.2 15.8 16.3 16.3 15.2 16.5L14.4 16.6C13.9 16.7 13.7 16.9 13.7 17.2C13.7 17.6 14.1 17.8 14.8 17.8C15.5 17.8 16.2 17.5 16.6 17.1L17.2 18.1C16.6 18.7 15.7 19 14.7 19C13.2 19 12.2 18.2 12.2 17.1C12.2 16 13.2 15.5 14.3 15.3L15.1 15.2C15.5 15.1 15.7 15 15.7 14.7C15.7 14.4 15.3 14.2 14.7 14.2C14 14.2 13.4 14.5 13.1 14.8L12.8 14.2Z" fill="#31A8FF" />
    </svg>
  );
}

export function IllustratorIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#330000" />
      <path d="M6 16.5L9.2 7.5H10.8L14 16.5H12.3L11.5 14.2H8.5L7.7 16.5H6ZM9 12.8H11L10 9.8L9 12.8Z" fill="#FF9A00" />
      <path d="M15.5 9.2C15.5 8.6 15.9 8.2 16.5 8.2C17.1 8.2 17.5 8.6 17.5 9.2C17.5 9.8 17.1 10.2 16.5 10.2C15.9 10.2 15.5 9.8 15.5 9.2ZM15.7 12H17.3V16.5H15.7V12Z" fill="#FF9A00" />
    </svg>
  );
}

export function AfterEffectsIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#00005C" />
      <path d="M5.5 16.5L8.7 7.5H10.3L13.5 16.5H11.8L11 14.2H8L7.2 16.5H5.5ZM8.5 12.8H10.5L9.5 9.8L8.5 12.8Z" fill="#9999FF" />
      <path d="M14.5 14.2C14.5 12.6 15.6 11.5 17.2 11.5C18.7 11.5 19.6 12.6 19.5 14.2H16C16 15.2 16.6 15.7 17.3 15.7C18 15.7 18.5 15.4 18.8 15.1L19.4 16C18.9 16.6 18.1 16.9 17.2 16.9C15.5 16.9 14.5 15.7 14.5 14.2ZM17.2 12.6C16.5 12.6 16 13.1 16 13.6H18.4C18.3 13.1 17.8 12.6 17.2 12.6Z" fill="#9999FF" />
    </svg>
  );
}

export function PremiereProIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#00005C" />
      <path d="M5.5 7.5H9C10.5 7.5 11.5 8.3 11.5 9.7C11.5 11.2 10.4 12 8.9 12H7.1V16.5H5.5V7.5ZM7.1 8.8V10.7H8.8 C9.6 10.7 10 10.3 10 9.7C10 9.1 9.6 8.8 8.8 8.8H7.1Z" fill="#9999FF" />
      <path d="M12.8 12H14.2V13.1C14.6 12.3 15.3 11.9 16.2 12V13.6C15.2 13.5 14.4 14.1 14.4 15.2V16.5H12.8V12Z" fill="#9999FF" />
    </svg>
  );
}

export function CanvaIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#00C4CC" />
      <path d="M12.2 16.8C9.5 16.8 7.5 14.8 7.5 12.1C7.5 9.4 9.6 7.4 12.5 7.4C14.3 7.4 15.6 8.2 16.2 9.5L14.7 10.3C14.3 9.4 13.5 8.9 12.4 8.9C10.5 8.9 9.1 10.3 9.1 12.1C9.1 13.9 10.5 15.3 12.3 15.3C13.4 15.3 14.3 14.7 14.9 13.8L16.4 14.6C15.6 16 14.1 16.8 12.2 16.8Z" fill="white" />
    </svg>
  );
}

export function VSCodeIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.5 4.5L17.5 1L1 11.5L6.5 16L1 20.5L17.5 23L23.5 19.5V4.5ZM17.5 17.5L9.5 12L17.5 6.5V17.5Z" fill="#007ACC" />
    </svg>
  );
}
