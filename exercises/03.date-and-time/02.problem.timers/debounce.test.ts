import { debounce } from './debounce.js'

// 🐨 Add the "beforeAll" and "afterAll" hooks that
// mock the date using `vi.useFakeTimers()` and
// `vi.useRealTimers()` respectively.
// 💰 beforeAll(callback)
// 💰 afterAll(callback)

test('executes the callback after the debounce timeout passes', () => {
  const fn = vi.fn<[string]>()
  const debouncedFn = debounce(fn, 250)

  // 🐨 First, call the "debounceFn" with "one" as the argument
  // and assert that the "fn" has not been called.
  // 💰 expect(fn).not.toHaveBeenCalled()

  // 🐨 Advance the mock timers by 250ms (the duration of debounce).
  // 💰 vi.advanceTimersByTime(duration)

  // 🐨 Write an assertion that "fn" has been called once.
  // 🐨 Write another assertion that "fn" has been called
  // with the correct arguments.
})

test('debounces the callback until the timeout passes since the last call', () => {
  const fn = vi.fn<[number]>()
  const debouncedFn = debounce(fn, 250)

  // 🐨 Start this test case similarly to the previous one:
  // call the "debouncedFn" with "one" as the argument and assert
  // that it has not been called.
  // 💰 debouncedFn('one')

  // 🐨 Then, advance the timers by 100ms to emulate that some
  // time has passed but not enough to trigger the debounce.
  // 💰 vi.advanceTimersByTime(duration)

  // 🐨 Now, call the "debouncedFn" function again, passing "two"
  // as the argument. Assert that the "fn" has not been called.

  // 🐨 Advance the timers by 250ms (the duration of debounce).

  // 🐨 Finally, write the assertions for the "fn" function:
  // - that it has been called once;
  // - that it has been called with the correct arguments.
})
