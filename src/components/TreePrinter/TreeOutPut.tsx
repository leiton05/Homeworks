interface TreeOutPutProp {
  numbers: string;
}

function TreeOutPut({ numbers }: TreeOutPutProp) {
  return (
    <>
      <p>
        <strong>Resultado: </strong> {numbers}
      </p>
    </>
  );
}

export default TreeOutPut;
