import { Slider, styled } from "@mui/material";

const PortaionSlider = styled(Slider)(({ value }) => ({
  color: "#223CE9",
  height: 250,
  backgroundColor: "#E1E6EA",
  "& .MuiSlider-track": {
    border: "none",
    width: 30,
    borderRadius: value === 100 ? "10px 10px 10px 10px" : "0 0 10px 10px",
  },
  "& .MuiSlider-thumb": {
    width: 42,
    borderRadius: 30,
    height: 3,
    boxShadow: "0px 2px 5px 0px #000000",
  },
  "& .MuiSlider-rail": {
    width: 30,
    border: "none",
    backgroundColor: "#E1E6EA",
    borderRadius: "10px",
  },
}));

interface valueProps {
  value: number | number[];
  setValue: React.Dispatch<React.SetStateAction<number | number[]>>;
  max: number;
}

function VerticalSlider({ value, setValue, max }: valueProps) {
  const handleChange = (e: any, newValue: number | number[]) => {
    if ((newValue as number) <= max) {
      setValue(newValue);
    }
  };
  return (
    <PortaionSlider
      orientation="vertical"
      min={0}
      max={100}
      step={1}
      value={value}
      valueLabelDisplay="auto"
      onChange={handleChange}
    />
  );
}

export default VerticalSlider;