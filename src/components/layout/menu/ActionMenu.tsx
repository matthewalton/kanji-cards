import ActionMenuItems from "./ActionMenuItems";

export default function ActionMenu() {
  return (
    <div className="sticky self-start top-8">
      <div className="flex flex-col gap-3 text-center font-medium">
        <ActionMenuItems />
      </div>
    </div>
  );
}
