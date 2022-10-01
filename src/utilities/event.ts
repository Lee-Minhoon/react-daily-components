export const dispatchChange = (ref: any, value: string) => {
  const input: any = ref.current?.getElementsByTagName("input")[0];
  if (input) {
    const lastValue = input.value;
    input.value = value;
    const event = new Event("input", { bubbles: true });
    const tracker = input._valueTracker;
    if (tracker) {
      tracker.setValue(lastValue);
    }
    input.dispatchEvent(event);
  }
};
