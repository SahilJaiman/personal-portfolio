
export default function SocialButton({ social }) {



  return (
    <a
   
      href={`${social?.url}`}
      target={"_blank"}
      className="h-12 w-12 flex flex-wrap shadow-[#dfa3de] items-center justify-center rounded-full group shadow-md transition ease-in-out duration-500  hover:scale-125"
    >
      <div className={`flex items-center flex-wrap justify-center transition ease-in-out duration-500  group-hover:scale-125`}>
        {social?.icon}
      </div>
    </a>
  )
}