function App() {
  // 初始物件的陣列
  const rates = [
    {
      name: "日幣",
      rate: 0.2128,
    },
    {
      name: "美金",
      rate: 29.555,
    },
    {
      name: "澳幣",
      rate: 20.31,
    },
    {
      name: "韓幣",
      rate: 0.02124,
    },
    {
      name: "印尼幣",
      rate: 0.00168,
    },
  ];
  // 處理 money 的 state
  const [money, setMoney] = React.useState(0);
  // 處理計算後的 money，初始值是物件的陣列 rates
  const [newMoney, setNewMoney] = React.useState(0);

  // 讀取並且更新每一次的 money 變數
  const handleMoneyChange = (e) => {
    setMoney(e.target.value);
  };

  // 按下計算按鈕後觸發事件
  // 讀取 money 當前的數值，使用 setNewMoney 動態地將此數值賦予到 newMoney 上
  const handleCalculate = () => {
    setNewMoney(money);
  };

  return (
    <div className="bg-slate-500 min-h-screen text-white text-lg">
      <div className="flex flex-col p-10 mx-auto max-w-xl">
        <form onSubmit={(e) => e.preventDefault()}>
          <label className="block text-2xl">
            <span className="block text-2xl font-medium">
              請輸入您要換的台幣
            </span>
            <input
              className="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 text-slate-600 rounded px-5 py-2"
              id="inputMoney"
              type="number"
              placeholder="台幣"
              onChange={handleMoneyChange}
            />
            <input
              type="button"
              value="開始計算"
              className="rounded bg-blue-400 text-white px-5 py-2 ml-4"
              onClick={handleCalculate}
            />
          </label>
        </form>
        <ul className="list-disc mt-5 text-2xl">
          可以換算成以下類別:
          {rates.map((result, index) => (
            <li key={index} className="ml-5 mt-2">
              {result.name}：{(newMoney * result.rate).toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
