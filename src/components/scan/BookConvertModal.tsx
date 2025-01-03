import React, { useState, useEffect } from "react";

interface BookConvertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookConvertModal: React.FC<BookConvertModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<number>(1);
  const [bookTitle, setBookTitle] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);

  // 모달 초기화 함수
  const resetModal = () => {
    setStep(1);
    setBookTitle("");
    setProgress(0);
  };

  // 모달이 닫힐 때 초기화
  const handleClose = () => {
    onClose();
    // 애니메이션이 끝난 후 초기화
    setTimeout(resetModal, 300);
  };

  useEffect(() => {
    if (step === 2) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 180) {
            clearInterval(interval);
            return 180;
          }
          return prev + 1;
        });
      }, 15);

      return () => clearInterval(interval);
    }
  }, [step]);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookTitle(e.target.value);
  };

  const handleConvert = () => {
    if (!bookTitle) return;
    setStep(2);
    // 변환 시뮬레이션
    setTimeout(() => {
      setStep(3);
    }, 3000);
  };

  const renderStep1 = () => (
    <div className="w-full">
      <h2 className="text-white text-xl font-bold mb-4">
        책 제목을 입력해 주세요.
      </h2>
      <input
        type="text"
        value={bookTitle}
        onChange={handleInputChange}
        placeholder="나는 고양이로소이다"
        className="w-full bg-gray-700 text-white p-3 rounded-lg mb-4"
      />
      <button
        onClick={handleConvert}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium"
      >
        변환하기
      </button>
    </div>
  );

  const renderStep2 = () => (
    <div className="w-full text-center">
      <h2 className="text-white text-xl font-bold mb-4">파일 변환 중...</h2>
      <p className="text-gray-300 mb-6">책이 만들어지고 있어요!</p>
      <div className="w-full flex justify-center">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* 파란색 원호 */}
            <path
              d={`M50,50 m0,-45 a45,45 0 1,1 0,90 a45,45 0 1,1 0,-90`}
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeDasharray="282.7433388230814"
              strokeDashoffset={282.7433388230814 * (1 - progress / 360)}
              transform="rotate(-90 50 50)"
              style={{
                transition: "stroke-dashoffset 0.1s ease",
              }}
            />

            {/* 노란색 동그라미 */}
            <g transform={`rotate(${progress} 50 50)`}>
              <circle cx="95" cy="50" r="6" className="fill-white p-1" />
              <circle cx="95" cy="50" r="4" className="fill-yellow-400" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="w-full text-center">
      <h2 className="text-white text-xl font-bold mb-2">변환 완료 🎉</h2>
      <p className="text-gray-300 mb-6">책이 만들어졌어요!</p>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => window.open("/preview", "_blank")}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium"
        >
          보관함으로
        </button>
        <button
          onClick={handleClose}
          className="px-6 py-3 bg-gray-700 text-white rounded-lg font-medium"
        >
          닫기
        </button>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-[#1F222A] w-[320px] rounded-2xl p-6 relative">
        {step === 1 && (
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white"
          >
            ✕
          </button>
        )}

        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
      </div>
    </div>
  );
};

export default BookConvertModal;
