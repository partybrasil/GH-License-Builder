import type { LicenseDescriptor } from '../types/license';

export const licenses: LicenseDescriptor[] = [
  {
    id: 'MIT',
    name: 'MIT License',
    family: 'permissive',
    type: 'software',
    shortDescription: 'Muy usada en proyectos open source. Permite uso comercial y redistribución.',
    referenceUrl: 'https://opensource.org/licenses/MIT',
    template: `MIT License

Copyright (c) {{year}} {{fullname}}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`,
    info: {
      permissions: [
        { label: 'Uso comercial', description: 'Puedes usar este software con fines comerciales' },
        { label: 'Modificación', description: 'Puedes modificar el software' },
        { label: 'Distribución', description: 'Puedes distribuir el software' },
        { label: 'Uso privado', description: 'Puedes usar el software de forma privada' },
      ],
      conditions: [
        { label: 'Incluir licencia y copyright', description: 'Debes incluir la licencia y el aviso de copyright en todas las copias' },
      ],
      limitations: [
        { label: 'Sin garantía', description: 'El software se proporciona sin ninguna garantía' },
        { label: 'Responsabilidad limitada', description: 'Los autores no son responsables por daños' },
      ],
    },
  },
  {
    id: 'Apache-2.0',
    name: 'Apache License 2.0',
    family: 'permissive',
    type: 'software',
    shortDescription: 'Licencia permisiva con protección de patentes. Popular en proyectos empresariales.',
    referenceUrl: 'https://www.apache.org/licenses/LICENSE-2.0',
    template: `Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/

Copyright {{year}} {{fullname}}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`,
    info: {
      permissions: [
        { label: 'Uso comercial', description: 'Puedes usar este software con fines comerciales' },
        { label: 'Modificación', description: 'Puedes modificar el software' },
        { label: 'Distribución', description: 'Puedes distribuir el software' },
        { label: 'Concesión de patentes', description: 'Otorga derechos explícitos sobre patentes' },
        { label: 'Uso privado', description: 'Puedes usar el software de forma privada' },
      ],
      conditions: [
        { label: 'Incluir licencia y copyright', description: 'Debes incluir la licencia y el aviso de copyright' },
        { label: 'Indicar cambios', description: 'Debes indicar los cambios significativos realizados al código' },
      ],
      limitations: [
        { label: 'Sin garantía', description: 'El software se proporciona sin ninguna garantía' },
        { label: 'Responsabilidad limitada', description: 'Los autores no son responsables por daños' },
        { label: 'Sin uso de marcas', description: 'No otorga derechos sobre marcas registradas' },
      ],
    },
  },
  {
    id: 'BSD-2-Clause',
    name: 'BSD 2-Clause "Simplified" License',
    family: 'permissive',
    type: 'software',
    shortDescription: 'Licencia muy simple y permisiva. Permite uso en software cerrado.',
    referenceUrl: 'https://opensource.org/licenses/BSD-2-Clause',
    template: `BSD 2-Clause License

Copyright (c) {{year}}, {{fullname}}

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`,
    info: {
      permissions: [
        { label: 'Uso comercial', description: 'Puedes usar este software con fines comerciales' },
        { label: 'Modificación', description: 'Puedes modificar el software' },
        { label: 'Distribución', description: 'Puedes distribuir el software' },
        { label: 'Uso privado', description: 'Puedes usar el software de forma privada' },
      ],
      conditions: [
        { label: 'Incluir licencia y copyright', description: 'Debes incluir la licencia y el aviso de copyright en todas las copias' },
      ],
      limitations: [
        { label: 'Sin garantía', description: 'El software se proporciona sin ninguna garantía' },
        { label: 'Responsabilidad limitada', description: 'Los autores no son responsables por daños' },
      ],
    },
  },
  {
    id: 'BSD-3-Clause',
    name: 'BSD 3-Clause "New" or "Revised" License',
    family: 'permissive',
    type: 'software',
    shortDescription: 'Similar a BSD 2-Clause pero prohíbe usar el nombre de los autores para promoción.',
    referenceUrl: 'https://opensource.org/licenses/BSD-3-Clause',
    template: `BSD 3-Clause License

Copyright (c) {{year}}, {{fullname}}

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
   contributors may be used to endorse or promote products derived from
   this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`,
    info: {
      permissions: [
        { label: 'Uso comercial', description: 'Puedes usar este software con fines comerciales' },
        { label: 'Modificación', description: 'Puedes modificar el software' },
        { label: 'Distribución', description: 'Puedes distribuir el software' },
        { label: 'Uso privado', description: 'Puedes usar el software de forma privada' },
      ],
      conditions: [
        { label: 'Incluir licencia y copyright', description: 'Debes incluir la licencia y el aviso de copyright en todas las copias' },
      ],
      limitations: [
        { label: 'Sin garantía', description: 'El software se proporciona sin ninguna garantía' },
        { label: 'Responsabilidad limitada', description: 'Los autores no son responsables por daños' },
        { label: 'Sin uso del nombre para promoción', description: 'No puedes usar el nombre de los autores para promocionar productos derivados sin permiso' },
      ],
    },
  },
  {
    id: 'GPL-3.0-only',
    name: 'GNU General Public License v3.0',
    family: 'copyleft-strong',
    type: 'software',
    shortDescription: 'Copyleft fuerte. Las modificaciones deben liberarse bajo GPLv3.',
    referenceUrl: 'https://www.gnu.org/licenses/gpl-3.0.html',
    template: `{{project}}
Copyright (C) {{year}}  {{fullname}}

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.`,
    info: {
      permissions: [
        { label: 'Uso comercial', description: 'Puedes usar este software con fines comerciales' },
        { label: 'Modificación', description: 'Puedes modificar el software' },
        { label: 'Distribución', description: 'Puedes distribuir el software' },
        { label: 'Concesión de patentes', description: 'Otorga derechos explícitos sobre patentes' },
        { label: 'Uso privado', description: 'Puedes usar el software de forma privada' },
      ],
      conditions: [
        { label: 'Divulgar código fuente', description: 'Debes proporcionar el código fuente cuando distribuyas' },
        { label: 'Incluir licencia y copyright', description: 'Debes incluir la licencia y el aviso de copyright' },
        { label: 'Misma licencia', description: 'Las modificaciones deben licenciarse bajo GPLv3' },
        { label: 'Indicar cambios', description: 'Debes indicar los cambios significativos realizados' },
      ],
      limitations: [
        { label: 'Sin garantía', description: 'El software se proporciona sin ninguna garantía' },
        { label: 'Responsabilidad limitada', description: 'Los autores no son responsables por daños' },
      ],
    },
  },
  {
    id: 'LGPL-3.0-only',
    name: 'GNU Lesser General Public License v3.0',
    family: 'copyleft-weak',
    type: 'software',
    shortDescription: 'Copyleft débil. Permite vincular desde software propietario.',
    referenceUrl: 'https://www.gnu.org/licenses/lgpl-3.0.html',
    template: `{{project}}
Copyright (C) {{year}}  {{fullname}}

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 3 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with this library; if not, write to the Free Software Foundation,
Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301  USA`,
    info: {
      permissions: [
        { label: 'Uso comercial', description: 'Puedes usar esta librería con fines comerciales' },
        { label: 'Modificación', description: 'Puedes modificar la librería' },
        { label: 'Distribución', description: 'Puedes distribuir la librería' },
        { label: 'Concesión de patentes', description: 'Otorga derechos explícitos sobre patentes' },
        { label: 'Uso privado', description: 'Puedes usar la librería de forma privada' },
      ],
      conditions: [
        { label: 'Divulgar código fuente (de la librería)', description: 'Debes proporcionar el código fuente de la librería modificada' },
        { label: 'Incluir licencia y copyright', description: 'Debes incluir la licencia y el aviso de copyright' },
        { label: 'Misma licencia (solo librería)', description: 'Las modificaciones de la librería deben licenciarse bajo LGPL' },
        { label: 'Indicar cambios', description: 'Debes indicar los cambios realizados a la librería' },
      ],
      limitations: [
        { label: 'Sin garantía', description: 'El software se proporciona sin ninguna garantía' },
        { label: 'Responsabilidad limitada', description: 'Los autores no son responsables por daños' },
      ],
    },
  },
  {
    id: 'AGPL-3.0-only',
    name: 'GNU Affero General Public License v3.0',
    family: 'copyleft-strong',
    type: 'software',
    shortDescription: 'Copyleft fuerte para servicios web. Obliga a liberar código incluso para SaaS.',
    referenceUrl: 'https://www.gnu.org/licenses/agpl-3.0.html',
    template: `{{project}}
Copyright (C) {{year}}  {{fullname}}

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.`,
    info: {
      permissions: [
        { label: 'Uso comercial', description: 'Puedes usar este software con fines comerciales' },
        { label: 'Modificación', description: 'Puedes modificar el software' },
        { label: 'Distribución', description: 'Puedes distribuir el software' },
        { label: 'Concesión de patentes', description: 'Otorga derechos explícitos sobre patentes' },
        { label: 'Uso privado', description: 'Puedes usar el software de forma privada' },
      ],
      conditions: [
        { label: 'Divulgar código fuente', description: 'Debes proporcionar el código fuente cuando distribuyas' },
        { label: 'Divulgar código para uso en red', description: 'Debes proporcionar código fuente incluso cuando se usa como servicio web' },
        { label: 'Incluir licencia y copyright', description: 'Debes incluir la licencia y el aviso de copyright' },
        { label: 'Misma licencia', description: 'Las modificaciones deben licenciarse bajo AGPL' },
        { label: 'Indicar cambios', description: 'Debes indicar los cambios significativos realizados' },
      ],
      limitations: [
        { label: 'Sin garantía', description: 'El software se proporciona sin ninguna garantía' },
        { label: 'Responsabilidad limitada', description: 'Los autores no son responsables por daños' },
      ],
    },
  },
  {
    id: 'MPL-2.0',
    name: 'Mozilla Public License 2.0',
    family: 'copyleft-weak',
    type: 'software',
    shortDescription: 'Copyleft débil a nivel de archivo. Término medio entre permisivas y copyleft.',
    referenceUrl: 'https://www.mozilla.org/en-US/MPL/2.0/',
    template: `This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.

Copyright (c) {{year}} {{fullname}}`,
    info: {
      permissions: [
        { label: 'Uso comercial', description: 'Puedes usar este software con fines comerciales' },
        { label: 'Modificación', description: 'Puedes modificar el software' },
        { label: 'Distribución', description: 'Puedes distribuir el software' },
        { label: 'Concesión de patentes', description: 'Otorga derechos explícitos sobre patentes' },
        { label: 'Uso privado', description: 'Puedes usar el software de forma privada' },
      ],
      conditions: [
        { label: 'Divulgar código fuente (archivos MPL)', description: 'Debes proporcionar el código fuente de los archivos MPL modificados' },
        { label: 'Incluir licencia y copyright', description: 'Debes incluir la licencia y el aviso de copyright en archivos MPL' },
        { label: 'Misma licencia (archivos MPL)', description: 'Los archivos MPL modificados deben seguir bajo MPL' },
      ],
      limitations: [
        { label: 'Sin garantía', description: 'El software se proporciona sin ninguna garantía' },
        { label: 'Responsabilidad limitada', description: 'Los autores no son responsables por daños' },
        { label: 'Sin uso de marcas', description: 'No otorga derechos sobre marcas registradas' },
      ],
    },
  },
  {
    id: 'EPL-2.0',
    name: 'Eclipse Public License 2.0',
    family: 'copyleft-weak',
    type: 'software',
    shortDescription: 'Copyleft débil orientada a entornos empresariales. Usada en proyectos Eclipse.',
    referenceUrl: 'https://www.eclipse.org/legal/epl-2.0/',
    template: `Eclipse Public License - v 2.0

Copyright (c) {{year}} {{fullname}}

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0`,
    info: {
      permissions: [
        { label: 'Uso comercial', description: 'Puedes usar este software con fines comerciales' },
        { label: 'Modificación', description: 'Puedes modificar el software' },
        { label: 'Distribución', description: 'Puedes distribuir el software' },
        { label: 'Concesión de patentes', description: 'Otorga derechos explícitos sobre patentes' },
        { label: 'Uso privado', description: 'Puedes usar el software de forma privada' },
      ],
      conditions: [
        { label: 'Divulgar código fuente (componentes EPL)', description: 'Debes proporcionar el código fuente de componentes EPL modificados' },
        { label: 'Incluir licencia y copyright', description: 'Debes incluir la licencia y el aviso de copyright' },
        { label: 'Misma licencia (componentes EPL)', description: 'Los componentes EPL modificados deben seguir bajo EPL' },
      ],
      limitations: [
        { label: 'Sin garantía', description: 'El software se proporciona sin ninguna garantía' },
        { label: 'Responsabilidad limitada', description: 'Los autores no son responsables por daños' },
      ],
    },
  },
  {
    id: 'CC0-1.0',
    name: 'Creative Commons Zero v1.0 Universal',
    family: 'public-domain',
    type: 'content',
    shortDescription: 'Renuncia a derechos y coloca la obra en el dominio público.',
    referenceUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    template: `CC0 1.0 Universal

Statement of Purpose

The person who associated a work with this deed has dedicated the work to
the public domain by waiving all of his or her rights to the work worldwide
under copyright law, including all related and neighboring rights, to the
extent allowed by law.

You can copy, modify, distribute and perform the work, even for commercial
purposes, all without asking permission.

Copyright (c) {{year}} {{fullname}} (for attribution purposes only)

No Copyright`,
    info: {
      permissions: [
        { label: 'Uso comercial', description: 'Puedes usar esta obra con fines comerciales' },
        { label: 'Modificación', description: 'Puedes modificar la obra' },
        { label: 'Distribución', description: 'Puedes distribuir la obra' },
        { label: 'Uso privado', description: 'Puedes usar la obra de forma privada' },
      ],
      conditions: [],
      limitations: [
        { label: 'Sin garantía', description: 'La obra se proporciona sin ninguna garantía' },
        { label: 'Responsabilidad limitada', description: 'El autor no es responsable por daños' },
        { label: 'Sin derechos de patentes o marcas', description: 'No otorga derechos sobre patentes o marcas' },
      ],
    },
  },
  {
    id: 'Unlicense',
    name: 'The Unlicense',
    family: 'public-domain',
    type: 'software',
    shortDescription: 'Dedicación al dominio público. Sin restricciones.',
    referenceUrl: 'https://unlicense.org/',
    template: `This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>`,
    info: {
      permissions: [
        { label: 'Uso comercial', description: 'Puedes usar este software con fines comerciales' },
        { label: 'Modificación', description: 'Puedes modificar el software' },
        { label: 'Distribución', description: 'Puedes distribuir el software' },
        { label: 'Uso privado', description: 'Puedes usar el software de forma privada' },
      ],
      conditions: [],
      limitations: [
        { label: 'Sin garantía', description: 'El software se proporciona sin ninguna garantía' },
        { label: 'Responsabilidad limitada', description: 'Los autores no son responsables por daños' },
      ],
    },
  },
];
