'use client';
import { startingData } from '#/lib/starting-data';
import { startingSwaps } from '#/lib/starting-swaps';
import { Button, ButtonGroup } from '@nextui-org/react';
import Link from 'next/link';
import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { useState, useEffect } from 'react';

export default function Page() {
  const [buttonTextDynamic, setButtonText] = useState('');
  const [currentSwap, setCurrentSwap] = useState();
  const [allSwaps, setAllSwaps] = useState([]);
  const [yourBrainSwaps, setYourBrainSwaps] = useState([]);
  const [swapCurrentlyEditing, setSwapCurrentlyEditing] = useState({});

  useEffect(() => {
    setAllSwaps(startingSwaps);
    setYourBrainSwaps([
      startingSwaps[0].items[0],
      startingSwaps[0].items[1],
      startingSwaps[0].items[2],
      startingSwaps[0].items[3],
    ]);
    setSwapCurrentlyEditing({
      name: '__title__',
      slug: 'streaming',
      description: '__description__',
      buttonText: 'create',
    });
  }, []);

  //console logging useEffect
  useEffect(() => {
    console.log('allSwaps:', allSwaps);
    console.log('yourBrainSwaps:', yourBrainSwaps);
    console.log('swapCurrentlyEditing:', swapCurrentlyEditing);
  });

  function changeButtonState(buttonText: string) {
    if (buttonTextDynamic === 'remove') {
      removeSwap(currentSwap);
      setButtonText('add');
    }
    if (buttonTextDynamic === 'edit') {
      startToEditSwap(currentSwap);
      setButtonText('done');
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
          welcome to brain-swap! ::: design your brain
        </h1>

        <div id="main-container" className="space-y-10 text-white">
          {startingData.map((section) => {
            return (
              <div id={section.name} key={section.name} className="space-y-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {section.name}
                </div>
                <div className="">
                  <div
                    id={section.name}
                    key={section.name}
                    className="bg-gray-1000 grid grid-cols-1 gap-5 rounded-xl p-5 lg:grid-cols-2"
                  >
                    {section.items.map((item) => {
                      return (
                        <div
                          key={item.name}
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
              </div>
            );
          })}
        </div>
        <h2 className="text-small font-medium text-gray-500">
          ~~~ the evolution of human philosophy is the evolution of AI
          philosophy ~~~
        </h2>
      </div>
    </NextUIProvider>
  );
}
