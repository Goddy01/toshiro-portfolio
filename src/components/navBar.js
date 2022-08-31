import React from "react";
import { FaAt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "gatsby";

const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className="flex items-center justify-between bg-dark-bg p-[5%]">
        <Link to="/" className="z-20">
          <img
            className="max-w-[80%]"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA5IiBoZWlnaHQ9IjI4IiB2aWV3Qm94PSIwIDAgMTA5IDI4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMC41MiAyN1YxLjQ0SDQuOTEyVjEyLjg1MkwxNS4zODggMS40NEgyMC42NDRMOS40ODQgMTMuNDI4TDIxLjk0IDI3SDE2LjEwOEw0LjkxMiAxNC41MDhWMjdIMC41MlpNMjkuNzkyOCAyNy41NEMyOC44MzI4IDI3LjU0IDI3Ljk0NDggMjcuMzk2IDI3LjEyODggMjcuMTA4QzI2LjMzNjggMjYuODIgMjUuNjQwOCAyNi40MTIgMjUuMDQwOCAyNS44ODRDMjQuNDQwOCAyNS4zNTYgMjMuOTcyOCAyNC43MzIgMjMuNjM2OCAyNC4wMTJDMjMuMzAwOCAyMy4yOTIgMjMuMTMyOCAyMi41IDIzLjEzMjggMjEuNjM2QzIzLjEzMjggMjAuNDM2IDIzLjQ0NDggMTkuMzkyIDI0LjA2ODggMTguNTA0QzI0LjcxNjggMTcuNTkyIDI1LjYxNjggMTYuODg0IDI2Ljc2ODggMTYuMzhDMjcuOTIwOCAxNS44NzYgMjkuMjY0OCAxNS42MjQgMzAuODAwOCAxNS42MjRDMzEuNjQwOCAxNS42MjQgMzIuNDQ0OCAxNS43MDggMzMuMjEyOCAxNS44NzZDMzMuOTgwOCAxNi4wMiAzNC43MTI4IDE2LjIzNiAzNS40MDg4IDE2LjUyNFYxNS4zMzZDMzUuNDA4OCAxNC40OTYgMzUuMjUyOCAxMy43NjQgMzQuOTQwOCAxMy4xNEMzNC42Mjg4IDEyLjQ5MiAzNC4xODQ4IDExLjk4OCAzMy42MDg4IDExLjYyOEMzMy4wMzI4IDExLjI2OCAzMi4zMzY4IDExLjA4OCAzMS41MjA4IDExLjA4OEMzMC42NTY4IDExLjA4OCAyOS44NzY4IDExLjMxNiAyOS4xODA4IDExLjc3MkMyOC40ODQ4IDEyLjIyOCAyNy45Njg4IDEyLjg2NCAyNy42MzI4IDEzLjY4TDIzLjgxNjggMTIuODE2QzI0LjEwNDggMTEuNzYgMjQuNjIwOCAxMC44NDggMjUuMzY0OCAxMC4wOEMyNi4xMzI4IDkuMzEyIDI3LjA0NDggOC43MTIgMjguMTAwOCA4LjI4QzI5LjE4MDggNy44NDggMzAuMzQ0OCA3LjYzMiAzMS41OTI4IDcuNjMyQzMyLjc2ODggNy42MzIgMzMuODM2OCA3LjgyNCAzNC43OTY4IDguMjA4QzM1Ljc4MDggOC41OTIgMzYuNjIwOCA5LjEzMiAzNy4zMTY4IDkuODI4QzM4LjAxMjggMTAuNTI0IDM4LjU1MjggMTEuMzUyIDM4LjkzNjggMTIuMzEyQzM5LjMyMDggMTMuMjcyIDM5LjUxMjggMTQuMzQgMzkuNTEyOCAxNS41MTZWMjdIMzUuNzMyOEwzNS41ODg4IDI0LjUxNkMzNS4wODQ4IDI1LjQyOCAzNC4zMjg4IDI2LjE2IDMzLjMyMDggMjYuNzEyQzMyLjMxMjggMjcuMjY0IDMxLjEzNjggMjcuNTQgMjkuNzkyOCAyNy41NFpNMjcuMzA4OCAyMS40NTZDMjcuMzA4OCAyMS45ODQgMjcuNDUyOCAyMi40NjQgMjcuNzQwOCAyMi44OTZDMjguMDI4OCAyMy4zMDQgMjguNDI0OCAyMy42MjggMjguOTI4OCAyMy44NjhDMjkuNDU2OCAyNC4xMDggMzAuMDY4OCAyNC4yMjggMzAuNzY0OCAyNC4yMjhDMzEuNjUyOCAyNC4yMjggMzIuNDQ0OCAyNC4wMzYgMzMuMTQwOCAyMy42NTJDMzMuODM2OCAyMy4yNjggMzQuMzg4OCAyMi43NTIgMzQuNzk2OCAyMi4xMDRDMzUuMjA0OCAyMS40MzIgMzUuNDA4OCAyMC42NzYgMzUuNDA4OCAxOS44MzZWMTkuNDA0QzM0Ljc4NDggMTkuMTQgMzQuMTM2OCAxOC45MzYgMzMuNDY0OCAxOC43OTJDMzIuODE2OCAxOC42MjQgMzIuMTQ0OCAxOC41NCAzMS40NDg4IDE4LjU0QzMwLjIwMDggMTguNTQgMjkuMTkyOCAxOC44MDQgMjguNDI0OCAxOS4zMzJDMjcuNjgwOCAxOS44NiAyNy4zMDg4IDIwLjU2OCAyNy4zMDg4IDIxLjQ1NlpNNTEuOTIyNCAyNy41NEM1MC42NzQ0IDI3LjU0IDQ5LjUxMDQgMjcuMjg4IDQ4LjQzMDQgMjYuNzg0QzQ3LjM3NDQgMjYuMjggNDYuNDUwNCAyNS41ODQgNDUuNjU4NCAyNC42OTZDNDQuODY2NCAyMy44MDggNDQuMjQyNCAyMi43NjQgNDMuNzg2NCAyMS41NjRDNDMuMzU0NCAyMC4zNjQgNDMuMTM4NCAxOS4wNjggNDMuMTM4NCAxNy42NzZDNDMuMTM4NCAxNi4yNiA0My4zNjY0IDE0Ljk0IDQzLjgyMjQgMTMuNzE2QzQ0LjI3ODQgMTIuNDkyIDQ0LjkxNDQgMTEuNDI0IDQ1LjczMDQgMTAuNTEyQzQ2LjU0NjQgOS42IDQ3LjQ5NDQgOC44OTIgNDguNTc0NCA4LjM4OEM0OS42Nzg0IDcuODg0IDUwLjg2NjQgNy42MzIgNTIuMTM4NCA3LjYzMkM1My4zODY0IDcuNjMyIDU0LjUyNjQgNy44OTYgNTUuNTU4NCA4LjQyNEM1Ni41OTA0IDguOTUyIDU3LjQ0MjQgOS42OTYgNTguMTE0NCAxMC42NTZWMC4yMTU5OTlINjIuMjU0NFYyN0g1OC40NzQ0TDU4LjI5NDQgMjMuOTc2QzU3LjYyMjQgMjUuMDggNTYuNzM0NCAyNS45NTYgNTUuNjMwNCAyNi42MDRDNTQuNTI2NCAyNy4yMjggNTMuMjkwNCAyNy41NCA1MS45MjI0IDI3LjU0Wk01Mi43ODY0IDIzLjc5NkM1My44MTg0IDIzLjc5NiA1NC43NDI0IDIzLjUzMiA1NS41NTg0IDIzLjAwNEM1Ni4zNzQ0IDIyLjQ1MiA1Ny4wMTA0IDIxLjcwOCA1Ny40NjY0IDIwLjc3MkM1Ny45NDY0IDE5LjgzNiA1OC4xODY0IDE4Ljc4IDU4LjE4NjQgMTcuNjA0QzU4LjE4NjQgMTYuNDA0IDU3Ljk0NjQgMTUuMzM2IDU3LjQ2NjQgMTQuNEM1Ny4wMTA0IDEzLjQ2NCA1Ni4zNzQ0IDEyLjczMiA1NS41NTg0IDEyLjIwNEM1NC43NDI0IDExLjY1MiA1My44MTg0IDExLjM3NiA1Mi43ODY0IDExLjM3NkM1MS43NTQ0IDExLjM3NiA1MC44MzA0IDExLjY1MiA1MC4wMTQ0IDEyLjIwNEM0OS4xOTg0IDEyLjczMiA0OC41NTA0IDEzLjQ2NCA0OC4wNzA0IDE0LjRDNDcuNjE0NCAxNS4zMzYgNDcuMzg2NCAxNi40MDQgNDcuMzg2NCAxNy42MDRDNDcuMzg2NCAxOC43OCA0Ny42MTQ0IDE5LjgzNiA0OC4wNzA0IDIwLjc3MkM0OC41NTA0IDIxLjcwOCA0OS4xOTg0IDIyLjQ1MiA1MC4wMTQ0IDIzLjAwNEM1MC44MzA0IDIzLjUzMiA1MS43NTQ0IDIzLjc5NiA1Mi43ODY0IDIzLjc5NlpNNzUuNDYwNSAyNy41NEM3NC4wNjg1IDI3LjU0IDcyLjc4NDUgMjcuMyA3MS42MDg1IDI2LjgyQzcwLjQ1NjUgMjYuMzE2IDY5LjQ0ODUgMjUuNjIgNjguNTg0NSAyNC43MzJDNjcuNzIwNSAyMy44NDQgNjcuMDQ4NSAyMi44IDY2LjU2ODUgMjEuNkM2Ni4xMTI1IDIwLjM3NiA2NS44ODQ1IDE5LjAzMiA2NS44ODQ1IDE3LjU2OEM2NS44ODQ1IDE2LjE1MiA2Ni4xMTI1IDE0Ljg0NCA2Ni41Njg1IDEzLjY0NEM2Ny4wNDg1IDEyLjQ0NCA2Ny42OTY1IDExLjQgNjguNTEyNSAxMC41MTJDNjkuMzUyNSA5LjYgNzAuMzM2NSA4Ljg5MiA3MS40NjQ1IDguMzg4QzcyLjU5MjUgNy44ODQgNzMuODE2NSA3LjYzMiA3NS4xMzY1IDcuNjMyQzc2LjQ1NjUgNy42MzIgNzcuNjU2NSA3Ljg3MiA3OC43MzY1IDguMzUyQzc5Ljg0MDUgOC44MDggODAuNzg4NSA5LjQ2OCA4MS41ODA1IDEwLjMzMkM4Mi4zOTY1IDExLjE5NiA4My4wMjA1IDEyLjIyOCA4My40NTI1IDEzLjQyOEM4My44ODQ1IDE0LjYwNCA4NC4xMDA1IDE1LjkxMiA4NC4xMDA1IDE3LjM1MlYxOC41NzZINzAuMTY4NUM3MC4yODg1IDE5LjY4IDcwLjU3NjUgMjAuNjQgNzEuMDMyNSAyMS40NTZDNzEuNTEyNSAyMi4yNDggNzIuMTI0NSAyMi44NiA3Mi44Njg1IDIzLjI5MkM3My42MTI1IDIzLjcyNCA3NC40NzY1IDIzLjk0IDc1LjQ2MDUgMjMuOTRDNzcuNDI4NSAyMy45NCA3OC45NjQ1IDIzLjA2NCA4MC4wNjg1IDIxLjMxMkw4My43MDQ1IDIyLjcxNkM4My4yNzI1IDIzLjcgODIuNjM2NSAyNC41NjQgODEuNzk2NSAyNS4zMDhDODAuOTgwNSAyNi4wMjggODAuMDIwNSAyNi41OCA3OC45MTY1IDI2Ljk2NEM3Ny44MzY1IDI3LjM0OCA3Ni42ODQ1IDI3LjU0IDc1LjQ2MDUgMjcuNTRaTTc1LjEzNjUgMTAuOThDNzQuMjk2NSAxMC45OCA3My41NDA1IDExLjE3MiA3Mi44Njg1IDExLjU1NkM3Mi4yMjA1IDExLjk0IDcxLjY2ODUgMTIuNDggNzEuMjEyNSAxMy4xNzZDNzAuNzU2NSAxMy44NzIgNzAuNDQ0NSAxNC42ODggNzAuMjc2NSAxNS42MjRINzkuNzgwNUM3OS42MzY1IDE0LjY4OCA3OS4zNjA1IDEzLjg3MiA3OC45NTI1IDEzLjE3NkM3OC41NDQ1IDEyLjQ4IDc4LjAwNDUgMTEuOTQgNzcuMzMyNSAxMS41NTZDNzYuNjg0NSAxMS4xNzIgNzUuOTUyNSAxMC45OCA3NS4xMzY1IDEwLjk4Wk05NS4yNjU4IDI3LjU0QzkzLjM2OTggMjcuNTQgOTEuODgxOCAyNyA5MC44MDE4IDI1LjkyQzg5LjcyMTggMjQuODE2IDg5LjE4MTggMjMuMjQ0IDg5LjE4MTggMjEuMjA0VjExLjUySDg1Ljg2OThWOC4xNzJIODkuMTgxOFYxLjhIOTMuMzIxOFY4LjE3Mkg5OC43OTM4VjExLjUySDkzLjMyMThWMjAuNzcyQzkzLjMyMTggMjEuNzggOTMuNTI1OCAyMi41NiA5My45MzM4IDIzLjExMkM5NC4zNjU4IDIzLjY0IDk0Ljk4OTggMjMuOTA0IDk1LjgwNTggMjMuOTA0Qzk2LjIzNzggMjMuOTA0IDk2LjcwNTggMjMuODQ0IDk3LjIwOTggMjMuNzI0Qzk3LjcxMzggMjMuNTggOTguMTgxOCAyMy4zODggOTguNjEzOCAyMy4xNDhMOTkuNTQ5OCAyNi4yOEM5OC45OTc4IDI2LjY2NCA5OC4zNDk4IDI2Ljk2NCA5Ny42MDU4IDI3LjE4Qzk2Ljg4NTggMjcuNDIgOTYuMTA1OCAyNy41NCA5NS4yNjU4IDI3LjU0Wk0xMDUuNTEgMjcuMTQ0QzEwNS4wMDYgMjcuMTQ0IDEwNC41NSAyNy4wMjQgMTA0LjE0MiAyNi43ODRDMTAzLjczNCAyNi41NDQgMTAzLjM5OCAyNi4yMiAxMDMuMTM0IDI1LjgxMkMxMDIuODk0IDI1LjM4IDEwMi43NzQgMjQuOTEyIDEwMi43NzQgMjQuNDA4QzEwMi43NzQgMjMuOTA0IDEwMi44OTQgMjMuNDQ4IDEwMy4xMzQgMjMuMDRDMTAzLjM5OCAyMi42MDggMTAzLjczNCAyMi4yNzIgMTA0LjE0MiAyMi4wMzJDMTA0LjU1IDIxLjc5MiAxMDUuMDA2IDIxLjY3MiAxMDUuNTEgMjEuNjcyQzEwNi4wMTQgMjEuNjcyIDEwNi40NyAyMS43OTIgMTA2Ljg3OCAyMi4wMzJDMTA3LjI4NiAyMi4yNzIgMTA3LjYxIDIyLjYwOCAxMDcuODUgMjMuMDRDMTA4LjExNCAyMy40NDggMTA4LjI0NiAyMy45MDQgMTA4LjI0NiAyNC40MDhDMTA4LjI0NiAyNC45MTIgMTA4LjExNCAyNS4zOCAxMDcuODUgMjUuODEyQzEwNy42MSAyNi4yMiAxMDcuMjg2IDI2LjU0NCAxMDYuODc4IDI2Ljc4NEMxMDYuNDcgMjcuMDI0IDEwNi4wMTQgMjcuMTQ0IDEwNS41MSAyNy4xNDRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"
            alt="kadet logo"
          />
        </Link>
        <button
          type="button"
          className="z-20 flex flex-col items-end"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`my-1 h-px bg-white transition-all duration-200 ease-linear ${
              open ? "w-8 rotate-45" : "w-9"
            }`}
          ></span>
          <span
            className={`my-1 h-px bg-white transition-all duration-200 ease-linear ${
              open ? "relative -top-2 w-8 -rotate-45" : "w-6"
            }`}
          ></span>
        </button>
      </div>

      {open && (
        <nav className="fixed top-0 left-0 z-10 flex h-full w-full animate-slide flex-col bg-box-bg px-[5%] pt-[20%] pb-[15%]">
          <ul className="mt-4 flex flex-col items-center justify-between gap-y-6 text-[1.3rem] text-dark-grey">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/blogs">Articles</Link>
            </li>
            <li>
              <Link to="/resume">Résumé</Link>
            </li>
          </ul>
          <div className="mt-6 flex flex-col items-center">
            <p className="mb-4 text-[1.2rem] font-bold text-white">
              Connect with me
            </p>
            <ul className="mt-4 flex items-center justify-center gap-x-3 text-xl text-dark-grey">
              <li>
                <a
                  href="https://www.test.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.test.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.test.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://www.test.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaAt />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;
