'use client';
import { demos } from '#/lib/demos';
import { Button, ButtonGroup } from '@nextui-org/react';
import Link from 'next/link';
import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { useState, useEffect } from 'react';

export default function Page() {
  function changeButtonState(buttonText: string) {
    const [buttonTextDynamic, changeButtonText] = useState('');
    const [currentSwap, changeCurrentSwap] = useState();

    if (buttonTextDynamic === 'remove') {
      removeSwap(currentSwap);
      changeButtonState('add');
    }
    if (buttonTextDynamic === 'edit') {
      startToEditSwap(currentSwap);
      changeButtonState('done');
    }
  }
  function removeSwap(currentSwap: undefined) {
    throw new Error('Function not implemented.');
  }

  function startToEditSwap(currentSwap: undefined) {
    throw new Error('Function not implemented.');
  }
  return (
    <NextUIProvider>
      <div className="space-y-8">
        <h1 className="text-xl font-medium text-gray-300">
          welcome to brain-swap!
        </h1>
        <h2 className="text-small font-medium text-gray-500">
          the evolution of human philosophy is the evolution of AI philosophy
        </h2>

        <div className="space-y-10 text-white">
          {demos.map((section) => {
            return (
              <div key={section.name} className="space-y-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {section.name}
                </div>
                <div className="bg-gray-1000 grid grid-cols-1 gap-5 rounded-xl p-5 lg:grid-cols-2">
                  {section.items.map((item) => {
                    return (
                      <div
                        key={section.name}
                        className="rounded-xl bg-gray-700 p-3"
                      >
                        <div className="flex justify-between  font-medium text-gray-200 group-hover:text-gray-50">
                          <span>{item.name}</span>
                          <Button
                            radius="full"
                            size="sm"
                            className=""
                            onClick={() => {
                              changeButtonState(item.buttonText);
                            }}
                          >
                            {item.buttonText}
                          </Button>
                        </div>

                        <div>
                          {item.description ? (
                            <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300">
                              {item.description}
                            </div>
                          ) : null}
                        </div>
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
