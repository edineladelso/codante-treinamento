
export default function MarketingLayout(
  { children } : Readonly<{ children: React.ReactNode}>
){
  return <>
    <div className="mx-auto w-full max-w-5xl py-8">
      { children }
    </div>
  </>
}