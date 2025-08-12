export function Footer() {
  return (
    <footer className="mt-16 border-t py-10 text-sm text-gray-600 dark:text-gray-300">
      <div className="container grid gap-2 md:grid-cols-3">
        <div>
          <p className="font-semibold">Municipalidad de Pachacámac</p>
          <p>Gerencia de Licencias y Desarrollo Económico</p>
          <p>Av. XYZ 123, Pachacámac, Lima</p>
        </div>
        <div>
          <p>Soporte: <a className="underline" href="mailto:soporte@pachacamac.gob.pe">xxxxx@pachacamac.gob.pe</a></p>
          <p>Uso interno — Acceso autorizado</p>
        </div>
        <div className="md:text-right">
          <p>&copy; {new Date().getFullYear()} Municipalidad de Pachacámac</p>
          <p>Hecho por Jhan Franco</p>
        </div>
      </div>
    </footer>
  )
}
