import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TooltipButtonProps {
  icon: React.ReactNode;
  tooltipText: string;
  onClick?: () => void;
}

const TooltipButton = ({ icon, tooltipText, onClick }: TooltipButtonProps) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild onClick={onClick}>
        {icon}
      </TooltipTrigger>
      <TooltipContent side="top" sideOffset={9}>
        <p>{tooltipText}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default TooltipButton;
