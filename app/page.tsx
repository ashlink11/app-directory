'use client';
import { demos } from '#/lib/demos';
import { Button, ButtonGroup } from '@nextui-org/react';
import Link from 'next/link';
import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';

export default function Page() {
  return (
    <NextUIProvider>
      <div className="space-y-8">
        <h1 className="text-xl font-medium text-gray-300">
          welcome to brain-swap!
        </h1>
      </div>
    </NextUIProvider>
  );
}
