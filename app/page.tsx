'use client';
import { startingData } from '#/lib/starting-data';
import { startingSwaps } from '#/lib/starting-swaps';
import { Button, ButtonGroup } from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import Link from 'next/link';
import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { useState, useEffect } from 'react';

export default function Page() {
  const [allOtherSwaps, setAllOtherSwaps] = useState([]);
  const [yourBrainSwaps, setYourBrainSwaps] = useState([]);
  const [swapCurrentlyEditing, setSwapCurrentlyEditing] = useState({});
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setYourBrainSwaps([
      startingSwaps[0].items[0],
      startingSwaps[0].items[1],
      startingSwaps[0].items[2],
      startingSwaps[0].items[3],
    ]);
    let startingSwapsArray = [];
    let index = 0;
    for (let i = 4; i < startingSwaps[0].items.length; i++) {
      startingSwapsArray[index] = startingSwaps[0].items[i];
      index++;
    }
    setAllOtherSwaps(startingSwapsArray);
    setSwapCurrentlyEditing({
      id: '',
      name: '__title__',
      slug: 'streaming',
      description: '__description__',
      buttonText: 'edit',
    });
  }, []);

  //console logging useEffect
  useEffect(() => {
    console.log('allOtherSwaps:', allOtherSwaps);
    console.log('yourBrainSwaps:', yourBrainSwaps);
    console.log('swapCurrentlyEditing:', swapCurrentlyEditing);
  });

  function changeButtonState(swapID, swapButtonText) {
    if (swapButtonText === 'add') {
      // remove from allOtherSwaps
      // add to yourBrainSwaps
      // switch button text to remove
    }
    if (swapButtonText === 'remove') {
      // remove from yourBrainSwaps
      // add to allOtherSwaps
      // switch button text to add
    }
    if (swapButtonText === 'edit') {
      // switch text fields to input fields
      // switch button text to done
      setEditMode(true);
    }
    if (swapButtonText === 'done') {
      // add to allOtherSwaps
      // give it an id
      // switch buttonText to add
      setEditMode(false);
    }
  }

  function renderHeader(headerText) {
    return (
      <>
        <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          {headerText}
        </div>
      </>
    );
  }

  function renderBody(items) {
    return (
      <>
        <div className="">
          <div className="bg-gray-1000 grid grid-cols-1 gap-5 rounded-xl p-5 lg:grid-cols-2">
            {items.map((item) => {
              return (
                <div key={item.name} className="rounded-xl bg-gray-700 p-3">
                  <div className="flex justify-between  font-medium text-gray-200 group-hover:text-gray-50">
                    <span>{item.name}</span>
                    <Button
                      radius="full"
                      size="sm"
                      className=""
                      onClick={() => {
                        changeButtonState(item.id, item.buttonText);
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
      </>
    );
  }

  function renderEditorBody(item) {
    return (
      <>
        <div className="">
          <div className="bg-gray-1000 grid grid-cols-1 gap-5 rounded-xl p-5 lg:grid-cols-2">
            <div key={item.name} className="rounded-xl bg-gray-700 p-3">
              <div className="flex justify-between  font-medium text-gray-200 group-hover:text-gray-50">
                <span>{item.name}</span>
                <Button
                  radius="full"
                  size="sm"
                  className=""
                  onClick={() => {
                    changeButtonState(item.id, item.buttonText);
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
          </div>
        </div>
      </>
    );
  }

  return (
    <NextUIProvider>
      <div className="space-y-8">
        <h1 className="text-xl font-medium text-gray-300">
          welcome to brain-swap! ::: design your brain
        </h1>

        <div id="main-container" className="space-y-10 text-white">
          <div className="space-y-5">
            {renderHeader('Your brain swaps (moods & mindsets)')}
            {renderBody(yourBrainSwaps)}
            {renderHeader('all other brain swaps (moods & mindsets)')}
            {renderBody(allOtherSwaps)}
            {renderHeader('create a brain swaps (mood and/or mindset)')}
            {renderEditorBody(swapCurrentlyEditing)}
          </div>
        </div>
        <h2 className="text-small font-medium text-gray-500">
          ~~~ the evolution of human philosophy is the evolution of AI
          philosophy ~~~
        </h2>
      </div>
    </NextUIProvider>
  );
}
