import HeaderPages from "@/components/HeaderPages";

export default async function FormId({
  params,
}: {
  params: Promise<{ formId: string }>;
}) {
  const { formId } = await params;

  return (
    <>
      <HeaderPages text={`Form #${formId}`} />
    </>
  );
}
