import FlexFull from "~/components/buildingBlocks/flexFull";

export default function ResultsContainer({
  children,
  maxHeight = "max-h-[65svh]",
  gap = "gap-1vh",
}: {
  children: React.ReactNode;
  maxHeight?: string;
  gap?: string;
}) {
  return (
    <FlexFull className="bg-linear1op50 shadowNarrowTight">
      <FlexFull
        className={`p-1vh md:p-1.5vh xl:p-2vh xxl:p-3vh ${maxHeight} overflow-y-auto overflow-x-hidden insetShadowXl hide-scrollbar border-900-lg flex-col ${gap}`}
      >
        {children}
      </FlexFull>
    </FlexFull>
  );
}
