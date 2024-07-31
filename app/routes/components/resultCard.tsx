import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function ResultCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VStackFull
      align="items-start"
      className="p-1.5vh md:p-2vh bg-col-320 border-900-md shadowNarrowTight rounded-[2vh]"
    >
      {children}
    </VStackFull>
  );
}
