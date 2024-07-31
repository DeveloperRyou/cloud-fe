import { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useAtom } from "jotai";
import sideNavAtom from "@/datas/sideNav";
import useComponentSize from "@/hooks/useComponentSize";
import SideNav from "@/layouts/SideNav";
import TopNav from "@/layouts/TopNav/index";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { size, componentRef } = useComponentSize();
  const [isMobile, setIsMobile] = useState<boolean | null>(false);
  const [sideNav, setSideNav] = useAtom(sideNavAtom);

  useEffect(() => {
    if (size.width === 0) return;
    // 720px 이하로 줄어들면 모바일로 판단
    if (size.width <= 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [size]);

  useEffect(() => {
    if (sideNav === null) {
      if (size.width === 0) return;
      if (size.width <= 1440) {
        setSideNav(false);
      } else {
        setSideNav(true);
      }
    }
  }, [size]);

  return (
    <main className="w-full h-fit bg-[#F5F6FA]" ref={componentRef}>
      {isMobile ? (
        <Stack className="w-full h-screen">
          <TopNav />
          <Stack className="w-full h-full p-4 justify-center">
            <Typography variant="300M" className="text-center">
              서비스 이용을 위해 PC 환경에서 접속해주세요.
            </Typography>
          </Stack>
        </Stack>
      ) : (
        <Stack direction="row" className="w-full">
          <SideNav isMenuOpen={sideNav ?? false} setIsMenuOpen={setSideNav} />
          <Stack
            direction="column"
            justifyContent="space-between"
            className="w-full h-full"
          >
            <TopNav />
            <Box
              className={
                sideNav && size.width > 1440
                  ? "ml-[260px] transition-all duration-300"
                  : "ml-[80px] transition-all duration-300"
              }
            >
              <Box className="w-full h-[calc(100vh-70px)] p-4 pl-8">
                {children}
              </Box>
            </Box>
          </Stack>
        </Stack>
      )}
    </main>
  );
}
