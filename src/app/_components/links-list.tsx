// import React from 'react';
// import { type Link } from '@/interfaces/link';


// const LinkList: React.FC<{ links: Link[] }> = ({ links }) => {
//   if (!links || links.length === 0) {
//     return null; // Return nothing if there are no images
//   }
//   return (
//     <>
//         <div className="max-w-2xl mx-auto">
//             <h2 className=" font-orbitron max-w-2xl mx-auto mb-8 mt-8"> Links! </h2>
//             {links?.map((link, index) => (
//                 <div> 
//                     <a key={index} href={link.url} className="font-orbitron mx-3 font-regular hover:underline">🔗 {link.alt || ''}</a>
//                 </div>
//             ))}
//         </div>
//     </>
//   )
// };

// export default LinkList;

import React from 'react';
import { type Link } from '@/interfaces/link';

const LinkList: React.FC<{ links: Link[] }> = ({ links }) => {
  // Check if links is actually an array
  if (!Array.isArray(links) || links.length === 0) {
    return null; // Return nothing if links is not an array or is empty
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="font-orbitron max-w-2xl mx-auto mb-8 mt-8">Links!</h2>
      {links.map((link, index) => (
        <div key={index}>
          <a href={link.url} className="font-orbitron mx-3 font-regular hover:underline">
            🔗 {link.alt || ''}
          </a>
        </div>
      ))}
    </div>
  );
};

export default LinkList;