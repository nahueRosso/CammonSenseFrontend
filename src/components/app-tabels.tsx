
export function TableParent({ parent="", child="" }:{
    parent: string;
    child: string;
  }) {
    return (
        <>
          <div className="space-x-0.5 h-40 bg-zinc-200 /50">
    <b>{parent}</b> Title
  </div>
  <div className="space-x-0.5 h-96 bg-zinc-200 /50">
    <b>{child}</b> data
  </div>
        </>
      ); 
    
}