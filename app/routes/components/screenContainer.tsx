import TransitionFull from "~/components/buildingBlocks/TransitionFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function ScreenContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TransitionFull className="h-full">
      <VStackFull className="p-1vh pt-2vh max-w-[120vh]" gap="gap-3vh">
        {children}
      </VStackFull>
    </TransitionFull>
  );
}
