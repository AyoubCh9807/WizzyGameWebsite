export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 text-center text-gray-500 border-t border-red-900/30">
      <p>© {year} AyoubCh. All rights reserved.</p>
      <p className="mt-2 text-sm italic">
        Wizzy™ and Wizzy Game™ are trademarks of AyoubCh.
      </p>
      <p className="mt-2 text-sm italic">
        All content, trademarks, and design elements are property of AyoubCh.
      </p>
    </footer>
  );
}
