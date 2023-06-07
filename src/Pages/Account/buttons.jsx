// import './style.css'
// import { FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon, TelegramShareButton, TelegramIcon,
//         RedditShareButton, RedditIcon, TwitterShareButton, TwitterIcon
// } from "react-share";

// const shareUrl = 'https://expency.netlify.app/#/'

// let usersData = JSON.parse(localStorage.getItem("usersData")) || [{
//     name : "name",
//     mail :"mail",
//     number : "number",
//     UPI : "UPI"
// }];


// const Buttons = () => {
//     return (
//         <>
//             <div className=" text-white flex items-center md:w-[60%] w-[90%] md:px-0 px-5 justify-around ">
//                 <div className="shareBtn">
//                     <span className="shareBtnText flex " >
//                         <FacebookShareButton url={shareUrl}>
//                             <FacebookIcon size={50} round={true} />
//                         </FacebookShareButton>
//                         <WhatsappShareButton url={shareUrl}>
//                             <WhatsappIcon size={50} round={true} />
//                         </WhatsappShareButton>
//                         <TelegramShareButton url={shareUrl}>
//                             <TelegramIcon size={50} round={true} />
//                         </TelegramShareButton>
//                         <RedditShareButton url={shareUrl}>
//                             <RedditIcon size={50} round={true} />
//                         </RedditShareButton>
//                         <TwitterShareButton url={shareUrl}>
//                             <TwitterIcon size={50} round={true} />
//                         </TwitterShareButton>
//                     </span>
//                     <button className="share rounded-[10px] md:py-3 py-2 md:px-12 px-8  bg-blue-500  " >
//                         Share
//                     </button>
//                 </div>
//                 <div className="tooltip">
//                     <button className="copy rounded-[10px] md:py-3 py-2 md:px-12 px-8  bg-blue-500 "
//                         onClick={() => navigator.clipboard.writeText(`${usersData[0].UPI}`) }
//                     >
//                         <span className="tooltiptext" id="myTooltip">Copy to clipboard</span>
//                         Copy
//                     </button>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Buttons;