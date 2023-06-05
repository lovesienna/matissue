"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { loginState } from "@/app/store/authAtom";
import styled from "styled-components";
import Image from "next/image";

import UserModal from "./UserModal";

import { User } from "@/app/types";

const UserMenu = ({ currentUser }: { currentUser: User | null }) => {
  const [isUserModal, setIsUserModal] = useState<boolean>(false);
  const router = useRouter();

  return (
    <UserMenuDiv>
      {currentUser ? (
        <>
          <IconButton
            onClick={() => {
              router.push("/my-page/scrap");
            }}
          >
            <Image
              src="/images/header/scrapIcon.png"
              width={28}
              height={28}
              alt="write_icon"
            />
            스크랩
          </IconButton>
          <IconButton
            onClick={() => {
              router.push("/add-recipe");
            }}
          >
            <Image
              src="/images/header/writeIcon.png"
              width={28}
              height={28}
              alt="write_icon"
            />
            글쓰기
          </IconButton>
          <ProfileButton
            onMouseOver={() => {
              setIsUserModal(true);
            }}
            onMouseOut={() => {
              setIsUserModal(false);
            }}
            onClick={() => {
              setIsUserModal(true);
            }}
          >
            <UserModal isUserModal={isUserModal} />
            <Image
              src={"/images/profileIcon.png"}
              width={32}
              height={32}
              alt="profile_icon"
              className="rounded-[100px]"
            />
          </ProfileButton>
        </>
      ) : (
        <>
          <LoginButton
            onClick={() => {
              router.push("/auth/login");
            }}
          >
            로그인
          </LoginButton>
          <LogoutButton
            onClick={() => {
              router.push("/auth/signup");
            }}
          >
            회원가입
          </LogoutButton>
        </>
      )}
    </UserMenuDiv>
  );
};

const UserMenuDiv = styled.div`
  display: none;
  position: relative;
  gap: 1.6rem;
  font-size: 16px;
  font-weight: 500;
  color: #4f3d21;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const ProfileButton = styled.div`
  padding: 0.6rem 0.2rem;
  cursor: pointer;

  &:hover {
    img {
      box-shadow: 0px 0px 1px 4px rgb(230, 230, 230);
    }
    transform: scale(1.1);

    transition: all 0.3s;
  }
`;

const LoginButton = styled.button`
  padding: 0.8rem 1.6rem;
  border-radius: 10rem;
  &:hover {
    background-color: rgb(230, 230, 230);
  }
`;

const LogoutButton = styled.button`
  padding: 0.8rem 1.6rem;
  border-radius: 10rem;
  background-color: #fbd26a;
  &:hover {
    background-color: #f8b551;
  }

  transition: background-color 0.3s;
`;

const IconButton = styled(LoginButton)`
  font-size: 16px;
  margin-left: -1rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &:hover {
    transform: scale(1.1);
  }

  transition: transform 0.3s;
`;

export default UserMenu;
