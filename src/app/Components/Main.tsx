import { FC } from "react"

export const Main: FC = () => {
  return (
    <div className="w-[calc(100%-24px)] flex flex-col flex-auto lg:flex-row mx-3 bg-white text-theme rounded-3xl">
      <div className="flex flex-col justify-between p-10 lg:w-2/3">
        <div className="max-w-[325px] inline-flex items-center justify-center gap-4 text-[#D1CECE]">
          <div>XLS</div>
          <div className="inline-flex flex-auto justify-center items-center">
            <div className="svg-planet px-4">
              <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.812951 3.8732C0.802504 3.81065 0.850735 3.7537 0.91415 3.7537H1.44562C1.47439 3.7537 1.50184 3.76578 1.52127 3.78699L3.87588 6.35694C3.89531 6.37815 3.92276 6.39023 3.95153 6.39023H6.85066C6.91832 6.39023 6.96746 6.32588 6.94964 6.26061L5.2762 0.129618C5.25838 0.0643445 5.30751 0 5.37518 0H6.45438C6.4865 0 6.51676 0.0150377 6.53616 0.0406346L11.3472 6.38954L11.3485 6.39023H16.0789C16.6918 6.39023 17.1886 6.88709 17.1886 7.5C17.1886 8.11291 16.6918 8.60977 16.0789 8.60977H11.3485L11.3472 8.61046L6.53616 14.9594C6.51676 14.985 6.4865 15 6.45438 15H5.37518C5.30751 15 5.25838 14.9357 5.2762 14.8704L6.94964 8.73939C6.96746 8.67412 6.91832 8.60977 6.85066 8.60977H3.95153C3.92276 8.60977 3.89531 8.62185 3.87588 8.64306L1.52127 11.213C1.50184 11.2342 1.47439 11.2463 1.44562 11.2463H0.91415C0.850735 11.2463 0.802504 11.1893 0.812951 11.1268L1.41584 7.5169C1.41771 7.50571 1.41771 7.49429 1.41584 7.4831L0.812951 3.8732Z" fill="#D1CECE" />
              </svg>
            </div>
            <hr className="w-full border-dashed" />
          </div>
          <div>RNW</div>
        </div>

        <div className="text-[103px] leading-[92px] font-semibold">
          The finance<br className="hidden lg:block" /> platform you<br className="hidden lg:block" /> don&apos;t hate.
        </div>

        <div>
          Runway is the modern and intuitive way to model, plan, and<br className="hidden lg:block" />
          align your business for everyone on your team.
        </div>
      </div>
      <div className="flex p-10 my-10">
        <div className="shape bg-[#90C0DB] border-2 border-[#DFDEDE] w-[300px] rounded-full"></div>
      </div>
    </div>
  )
}