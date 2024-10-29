import { memo, useEffect } from 'react';

interface AlertProps {
  /** The message to display in the alert */
  message: string;
  /** Callback function to handle alert dismissal */
  onClose: () => void;
  /** Optional variant for different alert styles */
  variant?: 'success' | 'error' | 'warning' | 'info';
  /** Optional auto-hide duration in milliseconds */
  autoHideDuration?: number;
}

/**
 * Alert component for displaying temporary messages to users
 * 
 * @example
 * <Alert
 *   message="Operation successful"
 *   variant="success"
 *   onClose={() => {}}
 *   autoHideDuration={5000}
 * />
 */
export const Alert = memo(({ 
  message, 
  onClose, 
  variant = 'info',
  autoHideDuration,
}: AlertProps): JSX.Element => {
  // Auto-hide functionality
  useEffect(() => {
    if (autoHideDuration) {
      const timer = setTimeout(onClose, autoHideDuration);
      return () => clearTimeout(timer);
    }
  }, [autoHideDuration, onClose]);

  return (
    <div 
      className={`alert alert--${variant}`}
      role="alert"
      aria-live="polite"
    >
      <p className="alert__message">{message}</p>
      <button 
        className="alert__close"
        onClick={onClose}
        aria-label="Close alert"
        type="button"
      >
        ✕
      </button>
    </div>
  );
});

// Set display name for debugging purposes
Alert.displayName = 'Alert';
