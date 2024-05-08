import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useTheme } from "./ThemeProvider";
import { themes } from "../constant/Constants";
const Theme = () => {
  const { mode, setMode } = useTheme();

  return (
    <div className="">
      <Menubar className="relative border-none bg-transparent shadow-none">
        <MenubarMenu>
          <MenubarTrigger className="focus:bg-light-900 data-[state-open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state-open]:bg-dark-200">
            {mode === "light" ? (
              <img
                src="/sun.svg"
                style={{ height: "20px", width: "20px" }}
                alt="sun"
              />
            ) : (
              <img
                src="/moon.svg"
                style={{ height: "20px", width: "20px" }}
                alt="moon"
              />
            )}
          </MenubarTrigger>
          <MenubarContent
            className="absolute right-[-1rem] top-[-1rem] min-w-[120px] rounded border py-2
            dark:border-dark-400 dark:bg-dark-300
            "
          >
            {themes.map((item) => {
              return (
                <MenubarItem
                  key={item.value}
                  className="flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400"
                  onClick={() => {
                    setMode(item.value);

                    if (item.value !== "system") {
                      localStorage.theme = item.value;
                    } else {
                      localStorage.removeItem("theme");
                    }
                  }}
                >
                  <img
                    src={item.icon}
                    style={{ height: "16", width: "16" }}
                    alt="moon"
                    className={`${mode === item.value && "active-theme"}`}
                  />

                  <p
                    className={`${
                      mode === item.value
                        ? "text-primary-500"
                        : "text-dark100_light900"
                    } body-semibold text-light-500`}
                  >
                    {item.label}
                  </p>
                </MenubarItem>
              );
            })}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default Theme;
