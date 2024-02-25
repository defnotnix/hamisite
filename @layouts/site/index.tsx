"use client";

import { PropsWithChildren } from "react";
import { LayoutSiteFooter } from "./footer";
import { LayoutSiteHeader } from "./header/site.header";
import { useDisclosure } from "@mantine/hooks";
import { Anchor, Modal, Text } from "@mantine/core";

export function LayoutSite({ children }: PropsWithChildren) {
  const [openMessage, handlerMessage] = useDisclosure(true);
  return (
    <>
      <LayoutSiteHeader />
      {children}
      <LayoutSiteFooter />

      <Modal opened={openMessage} onClose={handlerMessage.close} title="Notice">
        <Text size="sm">
          Hello, wonderful supporter!
          <br />
          <br />
          Thank you for visiting the site! Please note that it is currently
          under construction and not yet finalized
          <br />
          <br />
          Our dedicated team is working hard on this revamped site and will be
          fully live as soon as possible. Thank you immensely for your patience
          and ongoing support.
          <br />
          <br />
          With heartfelt gratitude,
          <br />
          <br />
          We post detailed report of each project over{" "}
          <Anchor
            style={{
              color: "var(--mantine-color-brand-5)",
            }}
            href="https://www.instagram.com/haminepal_/"
          >
            Instagram
          </Anchor>
        </Text>
      </Modal>
    </>
  );
}
