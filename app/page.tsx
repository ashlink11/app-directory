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

        <div className="space-y-10 text-white">
          {demos.map((section) => {
            return (
              <div key={section.name} className="space-y-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {section.name}
                </div>

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                  {section.items.map((item) => {
                    return (
                      <div key={section.name}>
                        <div className="font-medium text-gray-200 group-hover:text-gray-50">
                          {item.name}
                        </div>

                        <div>
                          {item.description ? (
                            <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300">
                              {item.description}
                            </div>
                          ) : null}
                        </div>

                        <Button>X</Button>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </NextUIProvider>
  );
}
